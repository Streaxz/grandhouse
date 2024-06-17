export enum PHOTO_TYPE {
  GENERAL = "GENERAL",
  LAYOUT2D = "LAYOUT2D",
  LAYOUT2D_MIRROR = "LAYOUT2D_MIRROR",
  LAYOUT3D = "LAYOUT3D",
  LAYOUT3D_MIRROR = "LAYOUT3D_MIRROR",
  INTERIOR = "INTERIOR",
  HISTORY = "HISTORY",
  EXTERIOR = "EXTERIOR",
  COMPLETE = "COMPLETE",
  POST_SCRIPTUM = "POST_SCRIPTUM",
}

export interface IPhoto {
  id: number;
  imageUrl: string;
  type?: PHOTO_TYPE;
  projectId?: number;
  order?: number;
  createAt: Date;
  updateAt: Date;
}
