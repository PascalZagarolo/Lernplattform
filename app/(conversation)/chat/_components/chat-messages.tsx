import { cn } from "@/lib/utils";
import Image from "next/image";

interface ChatMessagesProps {
    content : string
    ownMessage? : boolean
    imageUrl? : string
    date : Date
}


const ChatMessages: React.FC<ChatMessagesProps> = ({
    content,
    ownMessage,
    imageUrl,
    date
}) => {

    const convertToEuropeanTime = (date : Date) => {
        
        const newDate = date;

        return newDate.toLocaleString('de-DE', { hour: 'numeric', minute: 'numeric', hour12: true })

    };

    const isImageFile = (fileName : string) => {
        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]; // Add more extensions if needed
        const extension = fileName.toLowerCase().substring(fileName.lastIndexOf("."));
      
        return imageExtensions.includes(extension);
      };
    

    return ( 
        <div className=" w-full flex">
            <div className={cn("justify-start items-center rounded-md", ownMessage ? "bg-blue-500/50" : "bg-green-600/20" )}>
            {imageUrl && isImageFile(imageUrl) ? (
                <Image src={imageUrl} width={200} height={200} alt="image"/>
            ) : (
                <div className="text-base font-semibold mb-2 ml-4 mr-4 mt-4">
                {content}
                <div>
                <p className="text-xs text-gray-500/50 mt-2">{convertToEuropeanTime(date)}</p>
                </div>
            </div>
            )}
            
            
                
            </div>
            
        </div>
     );
}
 
export default ChatMessages;