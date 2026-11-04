import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({base:'/newear/',plugins:[react()],server:{watch:{ignored:['**/.tools/**']}}});
