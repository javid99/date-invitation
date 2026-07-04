import { supabase } from "../lib/supabase";

type SaveInvitationParams = {
   invite_token: string;
   accepted: boolean;
   place: string;
   day: string;
   time: string;
};

export async function saveInvitation(data: SaveInvitationParams) {
   const { error } = await supabase.from("invitations").insert(data).select();

   console.log(data);
   console.log(error);
   if (error) {
      throw error;
   }
}
