const Blog = require("../models/blog");

exports.index = async(req,res,next)=>{
    const blogs = await Blog.find();

    res.status(200).json({
        message: "Succesfully loaded",
        data:blogs,
    });
};

exports.add = async(req,res,next)=>{
    const blogs = new Blog({
        task: req.body.task,
        detail: req.body.task,
    });
    await blogs.save;

    res.status(201).json({
        message: "Successfully added"
    });
};

exports.remove = async(req,res,next)=>{
    const{id} =req.params;

    await Blog.findByIdAndDelete(id);

    res.status(200).json({
        message:"Successfully deleted",
    });
};

exports.update = async(req,res,next)=>{
    const {id} = req.params;
    const {task,detail} = req.body;

    await Blog.findByIdAndUpdate(id,{
        task: task,
        detail: detail,
    });

    res.status(200).json({
        message: "Successfully updated",
    });

};