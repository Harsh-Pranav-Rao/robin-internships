import  mongoose  from "mongoose";

const subsubTaskSchema = new mongoose.Schema({
  student_id : {
    type: String,
    required: true,
  },
  student_name : {
    type: String,
    required: true,
  },
  student_email : {
    type: String,
    required: true,
  },
  student_phoneNumber : {
    type: Number,
    required: true,
  },
  student_college : {
    type: String,
    required: true,
  },
})

const subTaskSchema = new mongoose.Schema({
  lname: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  stipend: {
    type: Number,
    default: 0, 
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements : {
    type: String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  internsRequired : {
    type : Number,
    required : true,
  },
  isActive : {
    type : Number,
    default : 1,
  },
  applicants: [
    {
      type: subsubTaskSchema,
    },
  ],
  acceptedApplicants : [
    {
      type : subsubTaskSchema,
    },
  ],
  rejectedApplicants : [
    {
      type : subsubTaskSchema,
    }
  ]
});

const parentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc : {
    type: String,
    required: true,
  },
  domain : {
    type: String,
    required: true,
  },
  phno : {
    type : String,
    required : true,
  },
  insta : {
    type: String,
    required : true,
  },
  linkedin : {
    type: String,
    required : true,
  },
  imgURL : {
    type : String,
    required : true,
  },
  listings: [
    {
      type: subTaskSchema,
    },
  ],

});

mongoose.models = {}

export const startupAll = mongoose.model('Startup', parentSchema);

