import { getCustomRepository } from 'typeorm';
import { Tag } from '../entities/Tags';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListUserReceivedComplimentsService {
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        });

        return compliments;
    }
}

export { ListUserReceivedComplimentsService }