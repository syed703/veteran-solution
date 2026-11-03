import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { validImage } from '@/lib/media-rules';
export function MediaUpload({onUploaded,onBusyChange}:{onUploaded:(value:string)=>void;onBusyChange?:(busy:boolean)=>void}){
 const query=useQueryClient();
 const [busy,setBusy]=useState(false);const [error,setError]=useState('');
 return <label>Upload image<input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" disabled={busy} onChange={async e=>{
 const input=e.currentTarget;const file=input.files?.[0];if(!file)return;
 if(!validImage(file.type,file.size)){setError('Choose a JPG, PNG, WebP, GIF or AVIF up to 10 MB.');input.value='';return;}
 setBusy(true);onBusyChange?.(true);setError('');
 try{
 const ext=file.type==='image/jpeg'?'jpg':file.type.split('/')[1];
 const path=`images/${crypto.randomUUID()}.${ext}`;
 const result=await supabase.storage.from('website-media').upload(path,file,{contentType:file.type,upsert:false,metadata:{originalName:file.name}});
 if(result.error)throw result.error;
 onUploaded(`media:${path}`);void query.invalidateQueries({queryKey:['admin-media']});toast.success('Image uploaded.');
 }catch{setError('Image upload failed. Please try again.');}
 finally{setBusy(false);onBusyChange?.(false);input.value='';}
 }}/>{busy&&<span role="status">Uploading…</span>}{error&&<span role="alert">{error}</span>}</label>;
}
export function AdminImage({value}:{value:string}){
 const [url,setUrl]=useState('');
 useEffect(()=>{let active=true;setUrl('');
 if(value.startsWith('media:'))void supabase.storage.from('website-media').createSignedUrl(value.slice(6),3600).then(result=>{if(active)setUrl(result.data?.signedUrl??'');});
 else if(value.startsWith('/site-assets/')||value.startsWith('https://'))setUrl(value);
 return()=>{active=false;};
 },[value]);
 return url?<img src={url} className="admin-preview" alt="Selected service or section image"/>:null;
}
