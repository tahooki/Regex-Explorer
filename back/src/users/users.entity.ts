import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  // 베이스 엔트리로 하면 User 로 컨트롤 가능 userEntity.save(); 요런식으로 저장 할수있슴 이거 안하면 this._userRepository.save(userEntity); 이거로 저장해야함.
  constructor(partial?: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn() // 프라이머키 설정
  id: number;

  @Column({ length: 500 }) // length 설정
  name: string;

  @Column({ unique: true }) // 유니크 키 설정
  email: string;

  @Expose({ name: 'fullname'}) // 이거랑... 이거는 어캐 나오게하는걸까? 반환된 함수값에서 접근해서 쓰는건가... 음... 이것도 잘나옴.
  get fullName(): string {
    return `${this.name} ${this.email}`;
  }

  @Column()
  @Exclude({ toPlainOnly: false }) // toPlainOnly: false 해줘야 password 가 안나옴. 컨트롤 단에서 해야함.
  password: string;
}
