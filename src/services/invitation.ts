import { supabase } from "../lib/supabase";

type SaveInvitationParams = {
   invite_token: string;
   accepted: boolean;
   place: string;
   day: string;
   time: string;
};

export async function saveInvitation(data: SaveInvitationParams) {
   const { error } = await supabase
      .from("invitations")
      .insert({
         invite_token: "test-123",
         accepted: true,
         place: "Coffee",
         day: "Friday",
         time: "18:00",
      })
      .select();

   console.log(data);
   console.log(error);
   if (error) {
      throw error;
   }
}
