import mongoose from "mongoose"

const connectDB = async() => {
    try{
        const url = 'mongodb+srv://sample-app-eval:UfYlFcZg26MLoaw2@awsmongo.tjhrkor.mongodb.net/sampleApp?retryWrites=true&w=majority';
        await mongoose.connect(url)
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.error("Failure: Unconnected to MongoDB")
        console.error(`${err.name}:${err.code} ${err.message}`);
        // throw new Error()
        throw err;
    }
}

export default connectDB