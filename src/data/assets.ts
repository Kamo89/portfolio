// Screenshot imports
import auralink_screenshot from "@/assets/AuraLink_pic&vid/Screenshot 2026-08-11 at 19.29.53.png";
import empty_screenshot from "@/assets/Empty_pic&vid/Screenshot 2026-08-11 at 19.45.17.png";
import extremeEthics_screenshot from "@/assets/ExtremeEthics_pic&vid/Screenshot 2026-08-11 at 19.48.24.png";
import petpal_screenshot from "@/assets/PetPal_pic&vid/Screenshot 2026-08-11 at 19.57.42.png";
import privateLocation_screenshot from "@/assets/PrivateLocation_pic&vid/Screenshot 2026-08-11 at 19.59.21.png";
import soleSociety_screenshot from "@/assets/SoleSociety_pic&vid/Screenshot 2026-08-11 at 20.01.22.png";
import venta_screenshot from "@/assets/Venta_pic&vid/Screenshot 2026-08-11 at 20.03.42.png";
import wanpuckV1_screenshot from "@/assets/WanPuckv1_pic&vid/Screenshot 2026-08-11 at 20.16.11.png";
import wanpuckV2_screenshot from "@/assets/WanPuckv2_pic&vid/Screenshot 2026-08-11 at 20.14.29.png";

// Video imports
import auralink_video from "@/assets/AuraLink_pic&vid/auralink-demo.mp4";
import empty_video from "@/assets/Empty_pic&vid/empty-demo.mp4";
import extremeEthics_video from "@/assets/ExtremeEthics_pic&vid/extreme-ethics-demo.mp4";
import petpal_video from "@/assets/PetPal_pic&vid/petpal-demo.mp4";
import privateLocation_video from "@/assets/PrivateLocation_pic&vid/private-location-demo.mp4";
import soleSociety_video from "@/assets/SoleSociety_pic&vid/sole-society-demo.mp4";
import venta_video from "@/assets/Venta_pic&vid/venta-demo.mp4";
import wanpuckV1_video from "@/assets/WanPuckv1_pic&vid/wanpuck-v1-demo.mp4";
import wanpuckV2_video from "@/assets/WanPuckv2_pic&vid/wanpuck-v2-demo.mp4";

export interface ProjectAssets {
  screenshot: string;
  video: string;
}

type ProjectSlug =
  | "auralink"
  | "empty"
  | "extreme-ethics"
  | "petpal"
  | "private-location"
  | "sole-society"
  | "venta"
  | "wanpuck-v1"
  | "wanpuck-v2";

export const projectAssets: Record<ProjectSlug, ProjectAssets> = {
  auralink: { screenshot: auralink_screenshot, video: auralink_video },
  empty: { screenshot: empty_screenshot, video: empty_video },
  "extreme-ethics": {
    screenshot: extremeEthics_screenshot,
    video: extremeEthics_video,
  },
  petpal: { screenshot: petpal_screenshot, video: petpal_video },
  "private-location": {
    screenshot: privateLocation_screenshot,
    video: privateLocation_video,
  },
  "sole-society": {
    screenshot: soleSociety_screenshot,
    video: soleSociety_video,
  },
  venta: { screenshot: venta_screenshot, video: venta_video },
  "wanpuck-v1": { screenshot: wanpuckV1_screenshot, video: wanpuckV1_video },
  "wanpuck-v2": { screenshot: wanpuckV2_screenshot, video: wanpuckV2_video },
};
