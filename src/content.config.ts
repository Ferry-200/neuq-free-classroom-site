import { defineCollection, z } from "astro:content";

// 每个 JSON 文件是 string[]（空教室名称列表）
const classroomData = defineCollection({
  type: 'data',
  schema: z.array(z.string()),
});

export const collections = {
  'free-classroom-data': classroomData,
};
