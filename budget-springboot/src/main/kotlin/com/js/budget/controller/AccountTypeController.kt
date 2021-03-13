package com.js.budget.controller

import com.js.budget.model.AccountType
import com.js.budget.repository.AccountTypeRepository
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("/api/v1/accounttypes")
class AccountTypeController(private val accountTypeRepository: AccountTypeRepository) {

    @GetMapping("")
    fun getAllAccountTypes(): List<AccountType> = 
        accountTypeRepository.findAll()


    @PostMapping("")
    fun createNewAccountType(@Valid @RequestBody accountType: AccountType): AccountType =
         accountTypeRepository.save(accountType)


    @GetMapping("/{id}")
    fun getAccountTypeById(@PathVariable(value = "id") accountTypeId: Long): ResponseEntity<AccountType> {
        return accountTypeRepository.findById(accountTypeId).map { accountType -> 
            ResponseEntity.ok(accountType)
        }.orElse(ResponseEntity.notFound().build())
    }

    @PutMapping("/{id}")
    fun updateAccountTypeById(@PathVariable(value = "id") accountTypeId: Long,
                          @Valid @RequestBody newAccountType: AccountType): ResponseEntity<AccountType> {

        return accountTypeRepository.findById(accountTypeId).map { existingAccountType ->
            val updatedAccountType: AccountType = existingAccountType
                    .copy(name = newAccountType.name)
            ResponseEntity.ok().body(accountTypeRepository.save(updatedAccountType))
        }.orElse(ResponseEntity.notFound().build())

    }

    @DeleteMapping("/{id}")
    fun deleteAccountTypeById(@PathVariable(value = "id") accountTypeId: Long): ResponseEntity<Void> {

        return accountTypeRepository.findById(accountTypeId).map { accountType  ->
            accountTypeRepository.delete(accountType)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())

    }
}