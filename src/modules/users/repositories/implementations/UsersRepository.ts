import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    return user;
  }

  findById(id: string): User | undefined {
    const user = new User();
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = new User();
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = new User();
    return user;
  }

  list(): User[] {
    const user = new User();
    return [user];
  }
}

export { UsersRepository };